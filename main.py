from flask import Flask, request, send_file
from telebot import TeleBot, types
import config



bot = TeleBot(config.BOT_TOKEN, parse_mode="html")
app = Flask(__name__, static_url_path='/static')


from utils import parse_init_data

@app.get('/')
def index():
    return send_file('static/index.html')

@app.post('/sendMessage')
def submit_order():
    data = request.json
    init_data = parse_init_data(token=config.BOT_TOKEN, raw_init_data=data['initData'])
    if init_data is False:
        return False
    query_id = init_data['query_id']
    result_text = "<b>Your message:</b>\n\n"
    for item in data['msg']:
        result_text += f"{item}\n"
 

    result = types.InlineQueryResultArticle(
        id=query_id,
        title='Order',
        input_message_content=types.InputTextMessageContent(message_text=result_text, parse_mode='HTML'))
    bot.answer_web_app_query(query_id, result)
    return ''


def main():
    app.run(host=config.WEBAPP_HOST, port=config.WEBAPP_PORT)


if __name__ == "__main__":
    main()
