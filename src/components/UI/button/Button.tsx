import cl from './Button.module.css';

interface Button {
    text: string;
}

const Button: React.FC<Button>= ({text}) => {
  return (
    <button className={cl.button}>
      {text}
    </button>
  )
};

export default Button;
