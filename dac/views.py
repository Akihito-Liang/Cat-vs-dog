from django.http import HttpResponse
from django.shortcuts import render
import tensorflow as tf
from scipy.misc import imread,imresize
import VGG16Model as model
import os
import numpy as np

def index(request):
    return render(request, 'index.html')

def uploadImg(request):
    if request.method == "POST":
        print(request.POST)
        print(request.FILES.get("f"))
        f_obj = request.FILES.get("f")
        name = f_obj.name
        f_write = open("static/"+name, "wb")
        for line in f_obj:
            f_write.write(line)
        imgs = tf.placeholder(tf.float32, [None, 224, 224, 3])
        sess = tf.Session()
        vgg = model.vgg16(imgs)
        fc3_c_d = vgg.probs
        pred = tf.nn.softmax(fc3_c_d)
        saver = vgg.saver()
        saver.restore(sess, 'model/')

        filepath = os.path.join("D:\\pythonWork\\dog\\test\\", "cat1.jpg")
        img1 = imread(filepath, mode="RGB")
        img1 = imresize(img1, (224, 224))
        prob = sess.run(pred, feed_dict={vgg.imgs: [img1]})
        max_index = np.argmax(prob)
        print(max_index)
        label = ""
        if(max_index==1):
            label = "狗"
        else:
            label = "猫"
        context = {
            "img" : "\\static\\" + name,
            "label": label
        }
        return render(request,'show.html',context)
    return render(request, 'imgUpload.html')

def put_ajax(request):
    if request.is_ajax():
        f_obj = request.FILES.get("f")
        print(f_obj)
        name = f_obj.name
        print(name)
        f_write = open(name, "wb")
        for line in f_obj:
            f_write.write(line)
        return HttpResponse("上传成功")
    return render(request, 'index.html')

def show(request):
    return render(request, 'show.html')

# Create your views here.
