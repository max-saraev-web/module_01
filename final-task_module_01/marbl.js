'use strict';

window.MARBLE = (() => {
    
    const game = (user = 5, bot = 5) =>{
        
        const balance = {
            currentUser: user,
            currentBot: bot,
        };

        return  function start(){

            console.log('Старт игры!');
            console.log(`
            Количество шариков
            Игрок: ${balance.currentUser - 1}
            Бот: ${balance.currentBot + 1}
                `);
            
        }
    }
    return {
        game,
    }
})();