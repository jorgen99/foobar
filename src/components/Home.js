import { Link } from "react-router-dom";
export function Home() {

  return (
    <>
      <div>
        <h1>Welcome to the FooBar page</h1>
        <p>Nothing to see here, really...</p>
        <Link to="foobar">Go to another page</Link>
      </div>
    </>
  );
}
