import jwt from 'jsonwebtoken'
import Product from '../models/Product.js'
import User from '../models/userModel.js'
import bcrypt from 'bcryptjs'

export const adminLogin = async (req, res) => {
    try {
        const { email, password } = req.body

        if (email != process.env.ADMIN_EMAIL || password != process.env.ADMIN_PASSWORD) {
            return res.status(401).json({ msg: "Email or Password is Wrong" })
        }

        const token = jwt.sign(
            { role: "admin", email },
            process.env.JWT_SECRET,
            { expiresIn: "1d" }
        );

        res.cookie("adminToken", token);

        return res.status(200).json({ msg: "Login Successfully",token:token });
    } catch (error) {
        return res.json({ msg: error })
    }

}

export const addProduct = async (req, res) => {
  try {
    const { name, price, description } = req.body;
    const image = req.file ? req.file.filename : null;

    if (!name || !price || !image || !description) {
      return res.status(400).json({ msg: "All fields are required" });
    }

    const newProduct = await Product.create({
      name,
      price,
      description,
      image,
    });

    return res.status(200).json({
      success: true,
      msg: "Product added successfully",
      product: newProduct,
    });

  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};

export const fetchProduct = async (req,res) => {
       const product = await Product.find()
       return res.json({product:product})
}

export const userSignup = async(req,res) => {
     console.log(req.body)
    const {name,email,password} = req.body

    const userExist = await User.findOne({email})

    if(userExist){
        return res.status(409).json({message:'user is exist'})
    }

    const hashPassword = await bcrypt.hash(password,12)

    const createUser = await User.create({
        name:name,
        email:email,
        password:hashPassword
    })

    

    if(createUser){
        const token = jwt.sign({ userId: createUser._id }, process.env.SECRET, { expiresIn: '1h' });
        console.log('token',token)
        res.cookie('auth_token',token)
        console.log('response auth token')
        return res.status(201).json({message:"user is created successfully",token:token})
    }
}


export const userLogin =async (req,res) => {
      console.log(req.body)
    const {email,password} = req.body

    const userExist = await User.findOne({email})
    console.log(userExist)

    if(!userExist){
        return res.status(409).json({message:'user is not exist'})
    }

    const comparePassword = await bcrypt.compare(password,userExist.password)



    if(userExist && comparePassword){
       const token = jwt.sign({ userId: userExist._id }, process.env.SECRET, { expiresIn: '1h' });
        console.log('token',token)
        res.cookie('auth_token',token)
        console.log('response auth token')
        return res.status(201).json({message:"user is login successfully",token:token})
    }
}

export const userLogout = async (req,res) => {
  
    await res.clearCookie('auth_token')
    return res.json({message:"User Logout Successfully"})

}

export const removeProduct = async (req, res) => {
  try {
    const { fullname } = req.body; // coming from frontend (JSON)

    if (!fullname) {
      return res.status(400).json({ success: false, msg: "Product name is required" });
    }

    // Delete product by name
    const deletedProduct = await Product.findOneAndDelete({ name: fullname });

    if (!deletedProduct) {
      return res.status(404).json({ success: false, msg: "Product not found" });
    }

    return res.status(200).json({
      success: true,
      msg: "Product deleted successfully",
      deletedProduct,
    });

  } catch (error) {
    return res.status(500).json({ success: false, msg: "Server Error", error: error.message });
  }
};


export const singleProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    console.log(req.params.id)
    if (!product) {
      return res.json({ msg: "Product not found" });
    }
    return res.json({ product });
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};

export const userProfile = async (req,res) => {
       const {token} = req.body

       const verifyToken = jwt.verify(token,process.env.SECRET)
       const userId = verifyToken.userId
       
       const userProfile = await User.findById({_id:userId})

       return res.json({name:userProfile.name})
}