# Generated by Django 3.1.2 on 2020-12-13 13:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0009_auto_20201213_1349'),
    ]

    operations = [
        migrations.AlterField(
            model_name='card',
            name='cvv',
            field=models.CharField(max_length=3),
        ),
        migrations.AlterField(
            model_name='card',
            name='expiry',
            field=models.CharField(max_length=5),
        ),
        migrations.AlterField(
            model_name='card',
            name='number',
            field=models.CharField(max_length=16),
        ),
    ]