const cv = require('opencv');

cv.readImage("./img/nasa.jpg",function(err,img){

  if(err){
    throw err;
  }

  const width = img.width();
  const height = img.height();

  if(width < 1 || height < 1){
    throw new Error('Image has no size');
  }

  img.save("./img/myNewImage.jpg");

});
