# Use Python37
FROM python:3.7
ENV PYTHONUNBUFFERED True
# Copy requirements.txt to the docker image and install packages
COPY requirements.txt /
RUN apt-get install libsm6 
RUN pip install --no-cache-dir -r requirements.txt
# Set the WORKDIR to be the folder
COPY . /app
# Expose port 8080
EXPOSE 8080
ENV PORT 8080
WORKDIR /app
# Use gunicorn as the entrypoint
CMD exec gunicorn --bind :8080 main:app --workers 1 --threads 1 --timeout 120
