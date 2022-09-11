from flask import Flask, jsonify, request
import openai
# import the API SECRET KEY from api_code 
from api_codes import API_KEY 

app = Flask(__name__)

# Secret key Required
openai.api_key = API_KEY

# Recieves POST requests and finds the sentiment of statment and returns it
# the body recieved from post request should have a {text_message:message} as a parameter
# @app.route('/sentiment', methods = ['POST'])
# def sentiment():
# 	req_data =request.get_json()
# 	res = openai.Completion.create(
# 	engine="text-davinci-002",
# 	prompt=req_data["text_message"],
# 	)
# 	return jsonify({'data': res["data"]["choices"][0]["text"]})


# Recieves POST requests and finds the solution of statment and returns it
@app.route('/solution', methods = ['POST'])
def home():
	req_data =request.get_json()
	res = openai.Completion.create(
	engine="text-davinci-002",
	prompt=req_data["text_message"],
	max_tokens=500,
	)
	print(res)
	return jsonify({'data': res})

# Running the flask api
if __name__ == '__main__':
	app.run(debug = False)



