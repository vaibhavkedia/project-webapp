module.exports = async (req,res) => {
  const organizationId = req.body.organizationId || "453eerw189y6yy6422e23";
  const name = req.body.name || "NIT";
  const email_format = req.body.email_format || "nit.ac.in";

  if(!name && !email_format){
      return res.status(403).json({
          success: false,
          message: "Nothing to update",
      });
  }
  try{
      const organization = await Schemas.Organization.findOne({_id: organizationId}).exec();
      if(!organization) {
          return res.status(400).json({
              success: false,
              message: "Organization doesn't exist",
          });
      }
      if(name != organization.name){
          organization.name = name;
          await organization.save();
          res.status(200).json({
              success: true,
              message: "Organization Updated Successfully",
          });
      }else{
        res.status(304).json({
            success: false,
            message: "Failed to Update",
        });
    }
      
  }catch (err){
      console.log(err);
      res.status(404).json({
          success: false,
          message: err.message,
      });
  }
};