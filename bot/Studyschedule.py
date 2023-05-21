from parinya import LINE
import cv2
LINE_NOTIFY_API_URL = "https://notify-api.line.me/api/notify"

line = LINE('hoqVc61wZRZcPAHUyI7Bxjbr2rKo8Rwr0mEXag70Uz0')
line.sendtext('Hello World')