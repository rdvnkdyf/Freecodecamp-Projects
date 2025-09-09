import re

def arithmetic_arranger(problems, show_answers=False):
    """
    Arranges arithmetic problems vertically and side-by-side.

    Args:
        problems: A list of strings, where each string is an arithmetic problem.
        show_answers: An optional boolean. If True, the answers are displayed.

    Returns:
        A string with the problems arranged, or an error message if the input is invalid.
    """
    if len(problems) > 5:
        return 'Error: Too many problems.'

    arranged_lines = [[], [], []]
    if show_answers:
        arranged_lines.append([])

    for problem in problems:
        parts = problem.split()
        if len(parts) != 3:
            continue

        operand1, operator, operand2 = parts

        if operator not in ['+', '-']:
            return "Error: Operator must be '+' or '-'."

        if not operand1.isdigit() or not operand2.isdigit():
            return 'Error: Numbers must only contain digits.'

        if len(operand1) > 4 or len(operand2) > 4:
            return 'Error: Numbers cannot be more than four digits.'

        max_len = max(len(operand1), len(operand2))
        width = max_len + 2

        line1 = operand1.rjust(width)
        line2 = operator + ' ' + operand2.rjust(width - 2)
        line3 = '-' * width

        arranged_lines[0].append(line1)
        arranged_lines[1].append(line2)
        arranged_lines[2].append(line3)

        if show_answers:
            if operator == '+':
                result = str(int(operand1) + int(operand2))
            else:
                result = str(int(operand1) - int(operand2))
            arranged_lines[3].append(result.rjust(width))

    result = ('    '.join(arranged_lines[0]) + '\n' +
              '    '.join(arranged_lines[1]) + '\n' +
              '    '.join(arranged_lines[2]))

    if show_answers:
        result += '\n' + '    '.join(arranged_lines[3])

    return result

print(f'\n{arithmetic_arranger(["32 + 698", "3801 - 2", "45 + 43", "123 + 49"])}')