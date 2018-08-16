/**
 * Created by EmiTis Yousefi on 03/05/2017.
 */

function Timer() {

    this.remainingTime = -1;
    let thisTimer      = this;


    /**
     * Set the timeout
     *
     * @param time
     *
     * @returns {Timer}
     */
    thisTimer.setTime = function (time) {
        thisTimer.remainingTime = time;
        return thisTimer;
    };


    /**
     * Get the remained time or false if it has been ended.
     *
     * @returns {Timer|Boolean}
     */
    thisTimer.getTime = function () {
        if (thisTimer.remainingTime > 0) {
            return thisTimer.remainingTime;
        } else {
            return false;
        }
    };


    /**
     * Decrease the remained time
     *
     * @returns {boolean}
     */
    thisTimer.decreaseTime = function () {
        if (thisTimer.remainingTime > 0) {
            thisTimer.remainingTime--;
            return true;
        } else {
            return false;
        }
    };


    /**
     * Abort the callback
     */
    thisTimer.stop = function () {
        clearInterval(thisTimer.runningInterval);
        delete thisTimer.runningInterval;
    };

    /**
     * Force the timer to run the callback now
     */
    thisTimer.force = function () {
        thisTimer.setTime(-1);
        thisTimer.stop();
    };

    /**
     * Set to do the the callback after the time (in seconds)
     *
     * @param callback
     *
     * @param time
     */
    thisTimer.delay = function (callback, time) {
        if (isDefined(callback) &&
            (typeof callback == 'function') &&
            isDefined(time) &&
            (isNumeric(time))) {

            time = Math.floor(time);

            thisTimer.setTime(time);

            thisTimer.stop();

            thisTimer.runningInterval = setInterval(function () {
                if (thisTimer.decreaseTime()) {
                    console.warn((thisTimer.getTime() + 1) + ' seconds remaining...');
                } else {
                    callback();
                    thisTimer.stop();
                }
            }, 1000);

        }
    };

    /**
     * Check if the given value is defined or not.
     *
     * @param value
     *
     * @returns {boolean}
     */
    function isDefined(value) {
        return (typeof value !== 'undefined');
    }

    /**
     * Check if the given value is numeric or not.
     *
     * @param value
     *
     * @returns {boolean}
     */
    function isNumeric(value) {
        return !isNaN(parseFloat(value)) && isFinite(value);
    }

    return thisTimer;
}