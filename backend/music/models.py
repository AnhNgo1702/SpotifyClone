from django.db import models

class Album(models.Model):
    title = models.CharField(max_length=255)
    artist = models.CharField(max_length=255)
    cover_image = models.ImageField(upload_to='album_covers/', blank=True, null=True)
    release_date = models.DateField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.title} - {self.artist}"

class Song(models.Model):
    title = models.CharField(max_length=255)
    artist = models.CharField(max_length=255)
    album = models.ForeignKey(Album, on_delete=models.SET_NULL, null=True, blank=True, related_name='songs')
    audio_file = models.FileField(upload_to='songs/')
    duration = models.DurationField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.title} - {self.artist}"

class MusicVideo(models.Model):
    title = models.CharField(max_length=255)
    song = models.ForeignKey(Song, on_delete=models.CASCADE, related_name='videos')
    video_file = models.FileField(upload_to='music_videos/')
    thumbnail = models.ImageField(upload_to='video_thumbnails/', blank=True, null=True)
    uploaded_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title