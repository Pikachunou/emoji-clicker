import React, { useEffect, useState } from 'react';
import Main from './Main'
import Shop from './Shop'
import Help from './Help'
import Scene from './Scene'
import upgradeData from './upgrades.json'


function Game() {
    let [view, setView] = useState("main")
    let [money, setMoney] = useState(100000) // TODO change to API call
    let [multiplier, setMultiplier] = useState(1)
    let [upgrades, setUpgrades] = useState(upgradeData)

    useEffect(() => {
        let tempMultiplier = 1

        for (let name of Object.keys(upgrades)) {
            const { effect, owned } = upgrades[name]
            if (owned) {
                if (name.includes("multiplier")) {
                    tempMultiplier *= Number(effect)
                } else if (name.includes("party")) {
                    
                }
            }
        }

        setMultiplier(tempMultiplier > 0 ? tempMultiplier : 1)
    }, [upgrades])
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
                        openHelp={() => setView("help")}
                        openShop={() => setView("shop")}
                        setMultiplier={setMultiplier}
                        setMoney={setMoney}
                    />
                )
            case 'shop':
                return (
                    <Shop
                        goBack={() => setView("main")}
                        money={money}
                        purchase={(name) => {
                            if (!upgrades[name]) return
                            const { cost, owned } = upgrades[name]
                            const deductFunds = (cost) => setMoney(prev => prev - cost)
                            if (!owned) {
                                deductFunds(cost)
                                setUpgrades(prev => {
                                    const next = {...prev}
                                    next[name].owned = true
                                    return next
                                })
                            }
                        }}
                        setUpgrades={setUpgrades}
                        upgrades={upgrades}
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
