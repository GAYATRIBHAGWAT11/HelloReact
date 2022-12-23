import React from "react";
 function Start(){
     return(
         <>
         <div className="container-fluid my-5">
             <div className="row">
                 <div className="col-sm-6 mx-auto">
                     <h1 className="text-center">Todays Plan</h1>
                      <div className="row">
                          <div className="col-9">
                              <input type="text" className="form-control" placeholder="write your plan here"/>
                          </div>

                     </div>
                 </div>
             </div>
         </div>
         </>
     )
 }
 export default Start;