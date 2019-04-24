# Cat-vs-Dog
视频已拷到硬盘上！

Cats vs. Dogs（猫狗大战）是Kaggle大数据竞赛某一年的一道赛题，利用给定的数据集，用算法实现猫和狗的识别。  
数据集可以从Kaggle官网上下载：
https://www.kaggle.com/c/dogs-vs-cats

![kaggle数据集](https://img-blog.csdn.net/20170529150815965?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvcXFfMTYxMzc1Njk=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)

数据集由训练数据和测试数据组成，训练数据包含猫和狗各12500张图片，测试数据包含12500张猫和狗的图片。


![数据](https://github.com/q494892202/Cat-vs-dog/blob/master/img/URKJ%5B103ET2N1V2C6SVBU%7D6.png)


在这里我们只需要训练集，训练集中包括猫狗图像25000张，数据太多了而且猫狗的图像都在一个文件夹中，只于图像的名字区分，很不利于我们制作训练集啊，因此我们写了一个简单的程序从训练集中取1000张图像，并将猫狗分别保存到文件夹内，对了为了方便大家单独新建个文件夹用于保存分类后的图像，可以参考下面代码中的路径。
代码在patition.py中。

import os
import shutil

#下载得到的训练集图像
image_path='D://BaiduNetdiskDownload//kaggle//train'
#将猫狗分类保存的路径
train_path='D://Python_file//pychart//dog//data'

image_list=os.listdir(image_path)
#读取2000张猫狗图像，按照图像名字分别保存
for image_name in image_list[0:2000]:
    class_name=image_name[0:3]
    save_path=os.path.join(train_path,class_name)
    if not(os.path.exists(save_path)):
        os.mkdir(save_path)
    file_name=os.path.join(image_path,image_name)
    save_name=os.path.join(save_path,image_name)
    shutil.copyfile(file_name,save_name)


2）搭建VGG16神经网络

VGG16 网络由ImageNet数据集训练1000类得到，所有最后一层全连接层输出为1000类，为了实现对猫狗的识别我们将最后一层输出改为2，并对最后的三层全连接层进行训练，所有在下面的VGG16Model.py文件中可以看到，只有最后三层全连接层我们选择了trainable=True。

3）读取训练数据

首先将训练数据分为两类读如list中，并分别给图像添加上标签。然后用tensorflow的队列函数将数据放入队列打乱顺序，并按照设置的batch分批次输出进行训练，最后将标签设置成onehot形式。

代码在loadData.py中。

4）主函数对模型进行训练，并保存模型。模型保存在生成的model文件夹中

代码在model_train.中

5）对训练好的模型测试

6）创建Django项目，编写对应的上传图片的uploadImg.html网页，和上传图片后进行识别反馈的show.html


![首页](https://github.com/q494892202/Cat-vs-dog/blob/master/img/O8S%7BKQ%25C%25%40R%24S2%60LP%245UQ5L.png)


选择识别图片。



![选择图片](https://github.com/q494892202/Cat-vs-dog/blob/master/img/8LUE_S%60DAJ%60%24X%7DT%5BH~2_N%7DY.png)



经过后台模型识别后，输出到show.html中



![结果展示](https://github.com/q494892202/Cat-vs-dog/blob/master/img/%25FX%60XJ0W_W%40AC%5B%24BIE%24OVOF.png)



