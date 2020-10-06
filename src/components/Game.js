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

    function searchObject(_object,term){
        var query = new RegExp(term,'i');
        return Object.keys(_object).filter(function(q){return query.test(q)})
    }

    useEffect(() => {
        const names = searchObject(upgrades, "^multiplier.*$")
        let tempMultiplier = 0
        for (let i = 0; i < names.length; i++) {
            const upgrade = upgrades[names[i]]
            const { effect, owned } = upgrade
            if (owned) {
                tempMultiplier += Number(effect)
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
