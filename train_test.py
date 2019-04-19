import tensorflow as tf
from scipy.misc import imread,imresize
import VGG16Model as model
import os
import numpy as np

imgs = tf.placeholder(tf.float32,[None,224,224,3])
sess = tf.Session()
vgg = model.vgg16(imgs)
fc3_c_d = vgg.probs
pred = tf.nn.softmax(fc3_c_d)
saver = vgg.saver()
saver.restore(sess,'model/')

# for root ,sub_folders,files in os.walk('D:\\pythonWork\\dog\\data\\cat'):
#     i = 0
#     cat = 0
#     dog = 0
#     for name in files:
#         print(root+","+name)

filepath = os.path.join("D:\\pythonWork\\dog\\test\\","cat1.jpg")
img1 = imread(filepath,mode="RGB")
img1 = imresize(img1,(224,224))
prob = sess.run(pred,feed_dict={vgg.imgs:[img1]})
max_index = np.argmax(prob)
print(max_index)