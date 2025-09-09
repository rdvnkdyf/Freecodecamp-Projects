import random

class Hat:
    def __init__(self, **kwargs):
        self.contents = []
        for color, count in kwargs.items():
            self.contents.extend([color] * count)

    def draw(self, num_balls):
        # Check if num_balls is greater than or equal to the number of balls in the hat
        if num_balls >= len(self.contents):
            all_balls = self.contents
            self.contents = []
            return all_balls

        drawn_balls = []
        for _ in range(num_balls):
            random_index = random.randint(0, len(self.contents) - 1)
            drawn_balls.append(self.contents.pop(random_index))
        return drawn_balls
        

def experiment(hat, expected_balls, num_balls_drawn, num_experiments):
    successes = 0
    for _ in range(num_experiments):
        hat_copy = copy.deepcopy(hat)
        drawn_balls = hat_copy.draw(num_balls_drawn)
        
        drawn_counts = {}
        for ball in drawn_balls:
            drawn_counts[ball] = drawn_counts.get(ball, 0) + 1
        
        match = True
        for color, count in expected_balls.items():
            if drawn_counts.get(color, 0) < count:
                match = False
                break
        
        if match:
            successes += 1
            
    return successes / num_experiments