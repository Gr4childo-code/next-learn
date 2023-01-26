export type TAlertArray = {
	color: string;
	text: string;
};

export const AlertArray: Array<TAlertArray> = [
	{
		color: 'primary',
		text: 'Это основное уведомление — check it out!',
	},
	{
		color: 'secondary',
		text: 'Это дополнительное уведомление — check it out!',
	},
	{
		color: 'success',
		text: '  Это уведомление об успехе — check it out!',
	},
	{
		color: 'danger',
		text: 'Это уведомление об опасности — check it out!',
	},
	{
		color: 'warning',
		text: 'Это уведомление-предупреждение — check it out!',
	},
	{
		color: 'info',
		text: 'Это инфо-уведомление — check it out!',
	},
	{
		color: 'light',
		text: 'Это светлое уведомление — check it out!',
	},
	{
		color: 'dark',
		text: 'Это темное уведомление — check it out!',
	},
];
