import { app, PORTA } from "./config.js";

app.listen( PORTA, ()=>
{
	console.log(`ouvindo porta ${PORTA}`);
});
