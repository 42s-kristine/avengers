from .base import *

# SECRET_KEY = 'django-insecure-fz)rp^lwn&i!0qe%pv@-_j4v!5%%uv8)bu(tef&7f%e!(9&bta'
SECRET_KEY = os.environ['SECRET_KEY']
DEBUG = True
ALLOWED_HOSTS = []

DATABASES = {
     'default': {
         'ENGINE': 'django.db.backends.sqlite3',
         'NAME': os.path.join(BASE_DIR, 'db.sqlite3'),
     }
 }
