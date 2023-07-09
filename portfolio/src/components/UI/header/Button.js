import Classes from "./Button.module.css";
const Button = function (props) {
  return (
    <button class={Classes.button_48}>
      <span class="text">{props.title}</span>
    </button>
  );
};

export default Button;
