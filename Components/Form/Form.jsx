export default function Form({ setusername }) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setusername(e.target.user.value);
      }}
    >
      <h3>Search user Github</h3>
      <div className="mb-3">
        <label>User name</label>
        <input
          type="text"
          className="form-control"
          placeholder="User Name"
          id="user"
        />
      </div>
    </form>
  );
}
