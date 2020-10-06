import React, { useState } from 'react';
import Main from './Main'
import Shop from './Shop'
import Help from './Help'
import Scene from './Scene'
import upgradeData from './upgrades.json'


function Game() {
    let [view, setView] = useState("main")
    let [money, setMoney] = useState(0) // TODO change to API call
    let [multiplier, setMultiplier] = useState(1)
    let [upgrades, setUpgrades] = useState(upgradeData)

    function handleEmojiClick() {
        setMoney(prev => prev + 1 * multiplier)
    }

    function renderView() {
        switch (view) {
            case 'main':
                return (
                    <Main
                        handleEmojiClick={handleEmojiClick}
                        money={money}
                        multiplier={multiplier}
                        openHelp={() => setView("help")}
                        openShop={() => setView("shop")}
                        setMultiplier={setMultiplier}
                        setMoney={setMoney}
                    />
                )
            case 'shop':
                return (
                    <Shop
                        upgrades={upgrades}
                        goBack={() => setView("main")}
                        setUpgrades={setUpgrades}
                    />
                )
            case 'help':
                return (
                    <Help
                        goBack={() => setView("main")}
                    />
                )
            default:
                return <Main />;
        }
    }

    return renderView()
}

export default Game;
