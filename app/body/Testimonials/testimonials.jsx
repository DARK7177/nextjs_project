import React, { useState, useRef, useEffect } from 'react';
import './testimonials.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons';
import audioFile from './audio.mp3'

const TestimonialCard = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(0);
    const [duration, setDuration] = useState(0);
    const audioRef = useRef(null);
    const progressRef = useRef(null);

    useEffect(() => {
        const audio = audioRef.current;
        if (audio) {
            audio.addEventListener('timeupdate', updateProgress);
            audio.addEventListener('loadedmetadata', onLoadedMetadata);
            return () => {
                audio.removeEventListener('timeupdate', updateProgress);
                audio.removeEventListener('loadedmetadata', onLoadedMetadata);
            };
        }
    }, []);

    const togglePlayPause = () => {
        const audio = audioRef.current;
        if (audio) {
            if (isPlaying) {
                audio.pause();
            } else {
                audio.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    const updateProgress = () => {
        const audio = audioRef.current;
        if (audio) {
            const currentProgress = (audio.currentTime / audio.duration) * 100;
            setProgress(currentProgress);
        }
    };

    const onLoadedMetadata = () => {
        const audio = audioRef.current;
        if (audio) {
            setDuration(audio.duration);
        }
    };

    const handleProgressClick = (event) => {
        const progressBar = progressRef.current;
        if (progressBar) {
            const clickX = event.nativeEvent.offsetX;
            const progressWidth = progressBar.offsetWidth;
            const newTime = (clickX / progressWidth) * duration;
            audioRef.current.currentTime = newTime;
            setProgress((clickX / progressWidth) * 100);
        }
    };

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    };

    return (
        <div className='testimonial-card'>
            <div className='testimonial-header'>
                <span className='testimonial-icon'></span>
                <h2 className='testimonial-title'>Testimonials</h2>
            </div>
            <p className='testimonial-content'>
                In a fast-growing and ever-changing city like Bangalore, it sometimes becomes very difficult to find or connect with like-minded people. Websites like hobbycue.com is a great service which helps me get in touch with, communicate, connect, and exchange ideas with other dancers. It also provides the extra benefit of finding products and services that I can avail, which I can be assured is going to be of great quality as it comes recommended by people of the hobbycue community. To have discussions, to get visibility, and to be able to safely explore various hobbies and activities in my city, all under one roof, is an excellent idea and I highly recommend it.
            </p>
            <div className='testimonial-footer'>
                <div className='testimonial-audio'>
                    <button className='audio-play-button' onClick={togglePlayPause}>
                        <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} />
                    </button>
                    <div className='audio-progress' ref={progressRef} onClick={handleProgressClick}>
                        <div className='audio-timeline'>
                            <div className='audio-track' style={{ width: `${progress}%` }}></div>
                            <div className='audio-thumb' style={{ left: `${progress}%` }}></div>
                        </div>
                        <span className='audio-time'>{formatTime(audioRef.current?.currentTime || 0)}</span>
                    </div>
                    <audio ref={audioRef} src={audioFile}></audio>
                </div>
                <img className='testimonial-avatar' src='./dp.png' alt='Shubha Nagarajan' />
                <div className='testimonial-info'>
                    <p className='testimonial-name'>Shubha Nagarajan</p>
                    <p className='testimonial-role'>Classical Dancer</p>
                </div>
            </div>
        </div>
    );
}

export default TestimonialCard;
