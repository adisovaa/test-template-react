import React from 'react'
import './text.css'

const Text = () => {
    return (
        <div className="text_wrapper">
            <div className="photo_author">
                <h4>Photo by Vjeran Pavic / The Verge</h4>
            </div>
            <div className="main_text">
                <h2>According to a support page the problems began Friday afternoon</h2>
                <p>An outage of Sony’s PlayStation Network that began Friday afternoon appeared to be persisting on Saturday morning. According to an update on the status page timestamped 6:33PM (not clear what time zone that is) on February 26th, the affected platforms are PS Vita, PS3, PS4, and PS5.</p>
                <p>“You might have difficulty launching games, apps, or network features. We’re working to resolve the issue as soon as possible. Thank you for your patience,” the update reads.</p>
                <p>Engadget reported that the outage may be affecting some games but not others; Fortnite appeared to be accessible but Minecraft and Call of Duty: Warzone were not.</p>
                <p>The PlayStation Network outage began a day after Microsoft’s Xbox Live service suffered a global outage for five hours. On February 10th, the PlayStation Network was down worldwide for about an hour.</p>
                <p>We’ve reached out to Sony for details about what’s causing the outage, how widespread it is, and when it may be resolved, and will update when we learn more.</p>
            </div>
            <div className="photo_author est">
                <h4>By Kim Lyons Feb 27, 2021, 9:05am EST</h4>
            </div>
        </div>
    )
}

export default Text