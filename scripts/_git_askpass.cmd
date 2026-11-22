@echo off
python -c "import os,sys; p=' '.join(sys.argv[1:]).lower(); print(os.environ.get('XQ_GH_USER','') if 'user' in p else os.environ.get('XQ_GH_TOKEN',''))" %*
