import {Button} from './Button';

export default {
    title: 'UI/Button',
    component: Button,
}

const Template = (arg) => <Button {...arg}/>

export const Default = () => Template.bind({});
Default.args = {
    children: 'Click me',
    view: 'text',
    size: 'big',
}