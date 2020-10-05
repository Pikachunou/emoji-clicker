import React from 'react';
import './Game.css'

function Game() {
    return (
        <>
            <div class="page-container">
                <canvas id="confetti"></canvas>
                <header class="game-header">
                    <div class="menu-container">
                        Menu
                     <ul class="menu">
                            <li class="save">Save</li>
                            <li class="export">Export save</li>
                            <li>
                                Import save <input class="import" type="file" name="filename" />
                            </li>
                            <li>Load</li>
                            <li>Achievements</li>
                        </ul>
                    </div>
                    <p class="counter emoji">😄</p>
                    <p class="counter-value">0</p>
                    <p class="emoji info">❕</p>
                </header>

                <main class="game-main">
                    <p class="emoji grin">😄</p>
                </main>

                <footer class="game-footer">
                    <p class="emoji shopcart">Shopcart 🛒</p>
                </footer>

                <div class="shop-overlay">
                    <div class="shop-header">
                        <p class="emoji counter">😄</p>
                        <p class="counter-value">0</p>
                    </div>
                    <div class="shop-main">
                        <div class="upgrade-row">
                            <div class="upgrade" id="upgrade1">
                                <p class="cost">100</p>
                                <p class="upgrade-icon upsidedown_grin">🙃</p>
                                <p id="detail-1">This emoji give you the power of two dollars per click!</p>
                            </div>
                            <div class="upgrade" id="upgrade2">
                                <p class="cost">300</p>
                                <p class="upgrade-icon laugh">😂</p>
                                <p id="detail-2">"you laughed too hard on a cat meme"</p>
                            </div>

                            <div class="upgrade" id="upgrade3">
                                <p class="cost">625</p>
                                <p class="upgrade-icon rofl">🤣</p>
                                <p id="detail-3">"you laughed too too hard on a cat meme"</p>
                            </div>
                        </div>
                        <div class="upgrade-row">
                            <div class="upgrade" id="upgrade4">
                                <p class="cost">500</p>
                                <p class="upgrade-icon party-time">🎉</p>
                                <p id="detail-3">"Party! (Click to toggle)"</p>
                            </div>
                            <div class="upgrade">f</div>
                        </div>
                    </div>
                    <div class="shop-footer">
                        <p class="emoji exit-shop">🔙</p>
                    </div>
                </div>
            </div>
            <div class="help-overlay">
                <div class="help-header">
                    <h2>Help</h2>
                    <p>
                        If this is your first time playing
                        an clicker game, all you have to do is click the emoji in the middle to gain money! The more money you get, the more emojis you can buy! Your goal is to collect every emoji in this idle game!
                </p>
                </div>
                <div class="help-main">
                    <p class="emoji exit-help">🔙</p>
                </div>
            </div>
        </>
    );
}

export default Game;
