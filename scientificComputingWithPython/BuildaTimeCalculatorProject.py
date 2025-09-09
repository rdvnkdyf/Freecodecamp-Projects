def add_time(start, duration, day=None):
    """
    Calculates the new time after adding a duration to a start time.

    Args:
        start (str): The start time in 12-hour format (e.g., '3:00 PM').
        duration (str): The duration time (e.g., '3:10').
        day (str, optional): The starting day of the week. Defaults to None.

    Returns:
        str: The new time in the format 'H:MM AM/PM', optionally with the day
             of the week and a day-later indicator.
    """
    # Parse start time
    start_time, period = start.split()
    start_hour, start_minute = map(int, start_time.split(':'))

    # Parse duration
    duration_hour, duration_minute = map(int, duration.split(':'))

    # Convert to 24-hour format
    if period == 'PM':
        start_hour += 12

    # Calculate total minutes
    total_minutes = start_hour * 60 + start_minute + duration_hour * 60 + duration_minute

    # Calculate new time
    new_hour = (total_minutes // 60) % 24
    new_minute = total_minutes % 60
    days_later = total_minutes // (24 * 60)

    # Convert back to 12-hour format and determine period
    if new_hour >= 12:
        new_period = 'PM'
        if new_hour > 12:
            new_hour -= 12
    else:
        new_period = 'AM'
        if new_hour == 0:
            new_hour = 12

    new_time_str = f"{new_hour}:{new_minute:02d} {new_period}"
    
    # Handle day of the week
    if day:
        days_of_week = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday']
        start_day_index = days_of_week.index(day.lower())
        new_day_index = (start_day_index + days_later) % 7
        new_day = days_of_week[new_day_index].capitalize()
        new_time_str += f", {new_day}"

    # Handle days later
    if days_later == 1:
        new_time_str += " (next day)"
    elif days_later > 1:
        new_time_str += f" ({days_later} days later)"

    return new_time_str