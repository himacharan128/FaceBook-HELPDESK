import Link from 'next/link';

const Home = () => {
  return (
    <div>
      <h1>Welcome to FB Helpdesk</h1>
      <Link href="/login">
        <a>Login</a>
      </Link>
      <br />
      <Link href="/register">
        <a>Register</a>
      </Link>
    </div>
  );
};

export default Home;
