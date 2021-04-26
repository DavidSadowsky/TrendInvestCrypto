# TrendInvestCrypto
Checkout this website live: https://davidsadowsky.github.io/TrendInvestCrypto/

## Model
I'm using a Naive-Bayes Classifier that I'm hand-training. You can take a look at the source code for that here: https://github.com/DavidSadowsky/TrendInvest


I'm currently getting ~66% accuracy from 5 weeks of data, which seems good (way better than Vegas) but this model only predicts whether a coin will increase or decrease - not how much it will increase or decrease by. That being said, if I invest $100 into 100 bullish coins, I may make returns from 66 coins but if the decrease of the 34 bearish coins is greater than the increase of the bullish coins, I still lose. For this reason, predictions from this model are not meant to be used for algorithmic trading. However, the predictions from this model can be another useful metric in the analysis of cryptocurrencies before investing.

Something interesting I've seen is that this model is pretty good at classifying 'pump and dump' coins at the beginning of the 'pump' cycle. This needs to be explored further but this model could be a helpful tool for short-term crypto investing in smaller coins that have the potential of increasing ten or one-hundred fold (i.e. SafeMoon, DogeCoin, GarliCoin, etc.).

Last disclaimer: I'm just working on this project for fun, therefore, it's relatively crude and has hundreds of opportunities for improvement and tuning. I will try to make improvements as time goes on but please check the commit history and updates section regularly if you plan on using this as a tool for investing.
