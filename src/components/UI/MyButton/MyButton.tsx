import cl from './MyButton.module.css';

interface MyButton {
    text: string;
}

const MyButton: React.FC<MyButton>= ({text}) => {
  return (
    <button className={cl.button}>
      {text}
    </button>
  )
};

export default MyButton;
