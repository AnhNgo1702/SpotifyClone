from rest_framework import serializers
from .models import Song, Album, MusicVideo

class AlbumSerializer(serializers.ModelSerializer):
    class Meta:
        model = Album
        fields = '__all__'

class SongSerializer(serializers.ModelSerializer):
    class Meta:
        model = Song
        fields = '__all__'

class MusicVideoSerializer(serializers.ModelSerializer):
    class Meta:
        model = MusicVideo
        fields = '__all__'