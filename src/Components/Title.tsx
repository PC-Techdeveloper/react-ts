interface Props {
  message: string;
  user: {
    name: string;
    age: number;
    email: string;
  };
}

const Title = ({ message, user }: Props) => {
  return (
    <p>
      {message} de: {user.email}
    </p>
  );
};

export default Title;
