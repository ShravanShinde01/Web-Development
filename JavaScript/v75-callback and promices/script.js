const callback = (params) => {
     console.log(params);
     
}
 

const loadscript = (src,callback) => {
     let sc = document.createElement("script");
     sc.src = src;
     sc.onload = () => {
       
         callback("shravan");
     }
      document.head.append(sc)
}

loadscript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/js/bootstrap.bundle.min.js", callback)