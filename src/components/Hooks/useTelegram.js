const tg = window.Telegram.WebApp;
export function useTelegram() {
const onClose = () => {
	tg.close()
}
const onToggleButton = () => {
if(tg.MainButton.isVisible) {
tg.MainButton.show();
} else {
 
/*основная кнопка взаимодействия с ботом*/
}
	return {
		onClose,
		tg,
		user: tg.initDataUnsafe?.user,
	
}
}
}