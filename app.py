from sqlalchemy import create_engine
from flask import Flask, render_template, jsonify
import pandas as pd

username = "postgres"
password = "Tempting2783!"
hostname = "localhost"
port = "5432"
db = "emissions"



app = Flask(__name__)


engine = create_engine(f'postgresql+psycopg2://{username}:{password}@{hostname}:{port}/{db}')


@app.route("/api/v1.0/emissions")
def emissions():
    conn = engine.connect()
    query = "SELECT region, segment, sum(emissions) FROM emissions WHERE segment = 'Total' AND region != 'World' GROUP BY region, segment ORDER BY region ASC"
    df = pd.read_sql(query, conn)
    print(df)
    return df.to_json(orient="records")

@app.route("/api/v1.0/regions")
def regions():
    conn = engine.connect()
    query = "SELECT region, type, sum(emissions) FROM emissions WHERE segment = 'Total' GROUP BY region, type ORDER BY region ASC"
    df = pd.read_sql(query, conn)
    print(df)
    return df.to_json(orient="records")

@app.route("/api/v1.0/energy")
def energy():
    conn = engine.connect()
    query = "SELECT region, type, reason, sum(emissions) FROM emissions WHERE type = 'Energy' AND reason != 'All' GROUP BY region, reason, type ORDER BY region, reason ASC"
    df = pd.read_sql(query, conn)
    print(df)
    return df.to_json(orient="records")

@app.route("/")
def home():

    return render_template("index.html")
@app.route('/worldmap')
def worldmap():
    return render_template('worldmap.html')

@app.route('/piecharts')
def piecharts():
    return render_template('regionpies.html')

@app.route('/energybars')
def energybars():
    return render_template('energybars.html')


if __name__ == "__main__":
    app.run(debug=True)
