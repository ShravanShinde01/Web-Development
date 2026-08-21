import { submitAction } from "./actions/form";

export default function Home() {
  
  return (
     <div>
         <form action={submitAction}>
            <div>
              <label htmlFor="name">Name : </label>
              <input type="text" name="name" id="name" className="text-white bg-blue-800" />
            </div>

            <div>
              <label htmlFor="add">Address : </label>
              <input type="text" name="add" id="add" className="text-white" />
            </div>


            <div>
               <button>Submit</button>
            </div>

         </form>
     </div>

  );
}
