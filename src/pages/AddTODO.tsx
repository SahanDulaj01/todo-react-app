import { useForm } from "react-hook-form";

function AddTOODO() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      todo: "",
    },
  });
  return (
    <div className="min-h-full flex justify-center py-1 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <form
          className="mt-1 space-y-6 flex justify-center"
          onSubmit={handleSubmit((data) => {
            console.log(JSON.stringify(data));
          })}
        >
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <label htmlFor="email-address" className="sr-only">
              Email address
            </label>
            <input
              type="text"
              className="appearance-none relative block
                  w-full px-3 py-2 border border-gray-300
                  placeholder-gray-500 text-gray-900 rounded-md
                  focus:outline-none focus:ring-indigo-500
                  focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="New todo"
              {...register("todo", { required: true })}
            />
            {errors.todo && <p>This field is required</p>}
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center
                py-2 px-4 border border-transparent text-sm font-medium
                rounded-md text-white bg-indigo-600 hover:bg-indigo-700
                focus:outline-none focus:ring-2 focus:ring-offset-2
                focus:ring-indigo-500 !ml-3"
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3"></span>
              Add TODO
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddTOODO;
