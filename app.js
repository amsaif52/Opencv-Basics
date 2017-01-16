const cv = require('opencv');

//Using cv#readImage() and Matrix#save()
cv.readImage("./img/nasa.jpg",function(err,img){

  if(err){
    throw err;
  }

  const width = img.width();
  const height = img.height();

  if(width < 1 || height < 1){
    throw new Error('Image has no size');
  }



  //Using Matrix#Grayscale()

  img.convertGrayscale();
  img.gaussianBlur([3,3]);
  img.save("./img/myNewImage.jpg");

  // img.save("./img/myNewImage1.jpg");
  //
  //
  // // Using Matrix#HSVscale()
  //
  // img.convertHSVscale();
  // img.save("./img/myNewImage2.jpg");

});
