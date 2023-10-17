import Swal from 'sweetalert2'
const AddCofee = () => {
    
    const handleinsert = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;
        const coffedata = {name, quantity, supplier, taste, category, details, photo}
        console.log(coffedata)
        fetch('https://coffe-store-server-5cp46egnt-rokonuzzamans-projects.vercel.app/coffee', {
            method: "POST",
            headers: {
                'content-type' : 'application/json' 
            },
            body: JSON.stringify(coffedata)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if (data.insertedId) {
                Swal.fire({
                    title: 'Success!',
                    text: 'Coffe details added succesfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
                  form.reset();
            }
        })
    } 

    return (
        <div className=" bg-[#ffeaac] p-16">

            <form onSubmit={handleinsert}>
                <div className="md:flex gap-5">
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Coffee Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="name" placeholder="Coffee Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Available Quantity</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="quantity" placeholder="Quantity" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>

                <div className="md:flex gap-5">
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Supplier</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="supplier" placeholder="Supplier" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Taste</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="taste" placeholder="Taste" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>

                <div className="md:flex gap-5">
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="category" placeholder="Category" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Details</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="details" placeholder="Details" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo url</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="photo" placeholder="Photo url" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <br />
                    <input type="submit" value="Add Coffe" className=" btn btn-block" />
            </form>
        </div>
    );
};

export default AddCofee;