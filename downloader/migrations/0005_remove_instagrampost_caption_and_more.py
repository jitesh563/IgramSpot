# Generated by Django 5.1 on 2024-09-03 05:35

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('downloader', '0004_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='instagrampost',
            name='caption',
        ),
        migrations.RemoveField(
            model_name='instagrampost',
            name='comments',
        ),
        migrations.RemoveField(
            model_name='instagrampost',
            name='likes',
        ),
    ]
