import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Coffeecard = ({ coffee, coffees, setCoffes }) => {
    const { _id, name, quantity, supplier, taste, category, details, photo } = coffee;

    const handleDelet = _id => {
        console.log('delete confirm', _id)
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then(() => {
            fetch(`https://coffe-store-server-5cp46egnt-rokonuzzamans-projects.vercel.app/coffee/${_id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount > 0) {                      
                        Swal.fire(
                            'Deleted!',
                            'Your file has been deleted.',
                            'success'
                            )
                        }
                        const remaing = coffees.filter(cof => cof._id !== _id)
                        setCoffes(remaing)
                })
        })
    }
    return (
        <div>
            <div className="card card-side bg-base-100 shadow-xl ">
                <figure><img className=" w-96" src={photo} alt="Coffee" /></figure>
                <div className=" flex gap-2 justify-around items-center w-full">
                    <div className=" space-y-2">
                        <p className=" text-2xl">Name: {name}</p>
                        <p>Man: {supplier}</p>
                        <p>Quantity: {quantity}</p>
                    </div>
                    <div className="card-actions justify-end">
                        <div className="btn-group btn-group-vertical space-y-2">
                            <button className="btn">View</button>
                            <Link to={`/updatecoffee/${_id}`}>
                                <button className="btn">Edit</button>
                            </Link>
                            <button
                                onClick={() => handleDelet(_id)}
                                className="btn">Delet</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Coffeecard;