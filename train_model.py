import numpy as np
import tensorflow as tf
import VGG16Model as model
import loadData as reader
import time

X_train, y_train = reader.get_file('./data')
#print(X_train)
image_batch, label_batch = reader.get_batch(X_train,y_train,224,224,25,256)
#print(y_train)
x_imgs = tf.placeholder(tf.float32, [None, 224, 224, 3])
y_imgs = tf.placeholder(tf.int32, [None, 2])

vgg = model.vgg16(x_imgs)
fc3_cat_and_dog = vgg.probs
loss = tf.reduce_mean(tf.nn.softmax_cross_entropy_with_logits(logits=fc3_cat_and_dog, labels=y_imgs))
optimizer = tf.train.GradientDescentOptimizer(learning_rate=0.0001).minimize(loss)
pre=tf.nn.softmax(fc3_cat_and_dog)
correct_pred = tf.equal(tf.argmax(pre, 1), tf.argmax(y_imgs,1))
accuracy = tf.reduce_mean(tf.cast(correct_pred, tf.float32))
sess = tf.Session()
sess.run(tf.global_variables_initializer())
vgg.load_weights("./vgg16_weights.npz",sess)
saver = vgg.saver()

coord = tf.train.Coordinator()
threads = tf.train.start_queue_runners(coord=coord, sess=sess)

start_time = time.time()
for i in range(500):
    image, label = sess.run([image_batch, label_batch])
    labels = reader.onehot(label)

    sess.run(optimizer, feed_dict={x_imgs: image, y_imgs: labels})
    if i % 10 == 0:
        loss_record = sess.run(loss, feed_dict={x_imgs: image, y_imgs: labels})
        print("now the loss is %f " % loss_record)
        print(sess.run(accuracy, feed_dict={x_imgs: image, y_imgs: labels}))
        end_time = time.time()
        print('time: ', (end_time - start_time))
        start_time = end_time
        print("----------epoch %d is finished---------------" % i)

saver.save(sess, "model/")  # 保存模型路径
print("Optimization Finished!")