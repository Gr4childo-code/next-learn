export type TButtonArray = {
	type: string;
	text: string;
	href?: string;
	color: string;
};

export const ButtonArray: Array<TButtonArray> = [
	{
		type: 'button',
		text: 'Это кнопка type button',
		color: 'primary',
	},
	{
		type: 'button',
		text: ' Это кнопка type button with a href',
		href: 'https://dzen.ru/',
		color: 'secondary',
	},
	{
		type: 'submit',
		text: 'Это кнопка type submit',
		color: 'success',
	},
	{
		type: 'reset',
		text: 'Это кнопка type reset',
		color: 'danger',
	},
	{
		type: 'radio',
		text: 'Это кнопка type radio!',
		color: 'warning',
	},
	{
		type: 'checkbox',
		text: 'Это кнопка type checkbox',
		color: 'info',
	},
];
