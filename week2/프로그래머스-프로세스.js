//프로그래머스-프로세스

class Queue {
    constructor() {
        this.queue = [];
        this.front = 0;
        this.rear = 0;
    }

    enqueue(value) {
        this.queue[this.rear++] = value;
    }

    dequeue() {
        const value = this.queue[this.front];
        delete this.queue[this.front];
        this.front += 1;
        return value;
    }
    peek() {
        return this.queue[this.front];
    }

    size() {
        return this.rear - this.front;
    }
    
     hasHigherPriority(priority) {
        for (let i = this.front; i < this.rear; i++) {
            if (this.queue[i].priority > priority) {
                return true;
            }
        }
        return false;
    }
}

function solution(priorities, location) {
    var answer = 0;
    const q = new Queue();
    for (let i in priorities) {
        q.enqueue({ priority: priorities[i], index: i });
    }

    while (q.size!==0) {
        const currentDoc = q.dequeue();
        if (q.hasHigherPriority(currentDoc.priority)) {
            q.enqueue(currentDoc);
        } else {
            answer++;
            if (currentDoc.index == location) {
                break;
            }
        }
    }

    return answer;
}
