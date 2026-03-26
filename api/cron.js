const RECIPIENT_EMAIL = "sudhanshu.sharma1985@gmail.com";
const SENDER_EMAIL = "onboarding@resend.dev";

const allProblems = [
  { name: "Two Sum", topic: "Arrays", diff: "Easy", pattern: "HashMap lookup", company: "Amazon", url: "https://leetcode.com/problems/two-sum/" },
  { name: "Best Time to Buy and Sell Stock", topic: "Arrays", diff: "Easy", pattern: "Sliding window / greedy", company: "Amazon", url: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/" },
  { name: "Product of Array Except Self", topic: "Arrays", diff: "Medium", pattern: "Prefix & suffix product", company: "Amazon", url: "https://leetcode.com/problems/product-of-array-except-self/" },
  { name: "Trapping Rain Water", topic: "Arrays", diff: "Hard", pattern: "Two pointer / monotonic stack", company: "Amazon", url: "https://leetcode.com/problems/trapping-rain-water/" },
  { name: "Subarray Sum Equals K", topic: "Arrays", diff: "Medium", pattern: "Prefix sum + HashMap", company: "Amazon", url: "https://leetcode.com/problems/subarray-sum-equals-k/" },
  { name: "Merge Intervals", topic: "Arrays", diff: "Medium", pattern: "Sort + greedy merge", company: "Amazon", url: "https://leetcode.com/problems/merge-intervals/" },
  { name: "Maximum Subarray", topic: "Arrays", diff: "Medium", pattern: "Kadane's algorithm", company: "Microsoft", url: "https://leetcode.com/problems/maximum-subarray/" },
  { name: "3Sum", topic: "Arrays", diff: "Medium", pattern: "Sort + two pointer", company: "Microsoft", url: "https://leetcode.com/problems/3sum/" },
  { name: "Container With Most Water", topic: "Arrays", diff: "Medium", pattern: "Two pointer (greedy)", company: "Microsoft", url: "https://leetcode.com/problems/container-with-most-water/" },
  { name: "Rotate Image", topic: "Arrays", diff: "Medium", pattern: "Transpose + reverse", company: "Microsoft", url: "https://leetcode.com/problems/rotate-image/" },
  { name: "Longest Substring Without Repeating Chars", topic: "Strings", diff: "Medium", pattern: "Sliding window + set", company: "Amazon", url: "https://leetcode.com/problems/longest-substring-without-repeating-characters/" },
  { name: "Group Anagrams", topic: "Strings", diff: "Medium", pattern: "Sort key HashMap", company: "Amazon", url: "https://leetcode.com/problems/group-anagrams/" },
  { name: "Minimum Window Substring", topic: "Strings", diff: "Hard", pattern: "Sliding window + two maps", company: "Amazon", url: "https://leetcode.com/problems/minimum-window-substring/" },
  { name: "Word Break", topic: "Strings", diff: "Medium", pattern: "DP or BFS", company: "Amazon", url: "https://leetcode.com/problems/word-break/" },
  { name: "Longest Palindromic Substring", topic: "Strings", diff: "Medium", pattern: "Expand around center", company: "Microsoft", url: "https://leetcode.com/problems/longest-palindromic-substring/" },
  { name: "Decode String", topic: "Strings", diff: "Medium", pattern: "Stack for nested brackets", company: "Microsoft", url: "https://leetcode.com/problems/decode-string/" },
  { name: "Binary Tree Level Order Traversal", topic: "Trees", diff: "Medium", pattern: "BFS with queue", company: "Amazon", url: "https://leetcode.com/problems/binary-tree-level-order-traversal/" },
  { name: "Lowest Common Ancestor of BST", topic: "Trees", diff: "Medium", pattern: "BST property traversal", company: "Amazon", url: "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/" },
  { name: "Serialize and Deserialize Binary Tree", topic: "Trees", diff: "Hard", pattern: "BFS/DFS + string encode", company: "Amazon", url: "https://leetcode.com/problems/serialize-and-deserialize-binary-tree/" },
  { name: "Validate Binary Search Tree", topic: "Trees", diff: "Medium", pattern: "DFS with min/max bounds", company: "Microsoft", url: "https://leetcode.com/problems/validate-binary-search-tree/" },
  { name: "Construct BT from Pre & Inorder", topic: "Trees", diff: "Medium", pattern: "Divide & conquer recursion", company: "Microsoft", url: "https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/" },
  { name: "Number of Islands", topic: "Graphs", diff: "Medium", pattern: "BFS/DFS flood fill", company: "Amazon", url: "https://leetcode.com/problems/number-of-islands/" },
  { name: "Course Schedule", topic: "Graphs", diff: "Medium", pattern: "Topological sort / cycle detect", company: "Amazon", url: "https://leetcode.com/problems/course-schedule/" },
  { name: "Word Ladder", topic: "Graphs", diff: "Hard", pattern: "BFS on word graph", company: "Amazon", url: "https://leetcode.com/problems/word-ladder/" },
  { name: "Network Delay Time", topic: "Graphs", diff: "Medium", pattern: "Dijkstra's algorithm", company: "Amazon", url: "https://leetcode.com/problems/network-delay-time/" },
  { name: "Clone Graph", topic: "Graphs", diff: "Medium", pattern: "BFS/DFS + HashMap clone", company: "Microsoft", url: "https://leetcode.com/problems/clone-graph/" },
  { name: "Alien Dictionary", topic: "Graphs", diff: "Hard", pattern: "Topological sort on char graph", company: "Microsoft", url: "https://leetcode.com/problems/alien-dictionary/" },
  { name: "Coin Change", topic: "DP", diff: "Medium", pattern: "Bottom-up 1D DP", company: "Amazon", url: "https://leetcode.com/problems/coin-change/" },
  { name: "Longest Increasing Subsequence", topic: "DP", diff: "Medium", pattern: "DP + binary search", company: "Amazon", url: "https://leetcode.com/problems/longest-increasing-subsequence/" },
  { name: "Edit Distance", topic: "DP", diff: "Hard", pattern: "2D DP (Levenshtein)", company: "Microsoft", url: "https://leetcode.com/problems/edit-distance/" },
  { name: "House Robber", topic: "DP", diff: "Medium", pattern: "1D DP, skip adjacent", company: "Microsoft", url: "https://leetcode.com/problems/house-robber/" },
  { name: "Merge K Sorted Lists", topic: "Heap", diff: "Hard", pattern: "Min-heap, merge step", company: "Amazon", url: "https://leetcode.com/problems/merge-k-sorted-lists/" },
  { name: "Find Median from Data Stream", topic: "Heap", diff: "Hard", pattern: "Two heaps (max + min)", company: "Amazon", url: "https://leetcode.com/problems/find-median-from-data-stream/" },
  { name: "LRU Cache", topic: "Heap", diff: "Medium", pattern: "HashMap + doubly linked list", company: "Microsoft", url: "https://leetcode.com/problems/lru-cache/" },
  { name: "Task Scheduler", topic: "Heap", diff: "Medium", pattern: "Max-heap + greedy cooldown", company: "Microsoft", url: "https://leetcode.com/problems/task-scheduler/" },
];

function getDayIndex() {
  var start = new Date("2026-03-27");
  var now = new Date();
  var diff = Math.floor((now - start) / (1000 * 60 * 60 * 24));
  return Math.max(0, diff) % Math.floor(allProblems.length / 2);
}

function diffColor(diff) {
  if (diff === "Easy") return "#4ecb82";
  if (diff === "Medium") return "#f5a623";
  return "#f05f5f";
}

function buildEmail(p1, p2, dayNum) {
  function card(p, num) {
    return '<div style="background:#18181c;border:1px solid rgba(255,255,255,0.08);border-radius:12px;padding:20px;margin-bottom:12px;">' +
      '<div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;">' +
      '<span style="font-family:monospace;font-size:11px;color:#7a7880;letter-spacing:0.06em;">PROBLEM ' + num + ' — ' + p.topic.toUpperCase() + ' — ' + p.company.toUpperCase() + '</span>' +
      '<span style="font-size:11px;padding:3px 10px;border-radius:6px;background:rgba(255,255,255,0.05);color:' + diffColor(p.diff) + ';font-family:monospace;">' + p.diff + '</span>' +
      '</div>' +
      '<div style="font-size:17px;font-weight:600;color:#f0ede8;margin-bottom:8px;">' + p.name + '</div>' +
      '<div style="font-size:12px;color:#7a7880;font-family:monospace;margin-bottom:16px;">Pattern: ' + p.pattern + '</div>' +
      '<a href="' + p.url + '" style="display:inline-block;background:#f5a623;color:#0a0a0b;text-decoration:none;padding:9px 20px;border-radius:8px;font-size:13px;font-weight:600;">Solve on LeetCode →</a>' +
      '</div>';
  }

  return '<!DOCTYPE html><html><head><meta charset="UTF-8"/></head>' +
    '<body style="margin:0;padding:0;background:#0a0a0b;font-family:Helvetica,Arial,sans-serif;">' +
    '<div style="max-width:560px;margin:0 auto;padding:32px 16px;">' +
    '<div style="margin-bottom:32px;">' +
    '<div style="font-family:monospace;font-size:13px;color:#f5a623;margin-bottom:8px;">dsa.prep</div>' +
    '<div style="font-size:24px;font-weight:700;color:#f0ede8;letter-spacing:-0.02em;">Day ' + dayNum + ' — Your 2 Problems</div>' +
    '<div style="font-size:14px;color:#7a7880;margin-top:6px;">Good morning! Here are today\'s problems. Aim to solve both within 60 minutes.</div>' +
    '</div>' +
    card(p1, 1) +
    card(p2, 2) +
    '<div style="background:rgba(245,166,35,0.06);border:1px solid rgba(245,166,35,0.15);border-radius:10px;padding:16px;margin-top:4px;margin-bottom:28px;">' +
    '<div style="font-family:monospace;font-size:10px;color:#f5a623;letter-spacing:0.08em;margin-bottom:6px;">TODAY\'S TIP</div>' +
    '<div style="font-size:13px;color:#a0a0a0;line-height:1.6;">Always state your approach out loud before coding. Talk through brute force first, then optimize. In interviews, the explanation matters as much as the solution.</div>' +
    '</div>' +
    '<div style="border-top:1px solid rgba(255,255,255,0.06);padding-top:20px;text-align:center;font-size:12px;color:#555;">' +
    'DSA Prep Daily · Good luck! 🚀' +
    '</div></div></body></html>';
}

module.exports = function handler(req, res) {
  var authHeader = req.headers['authorization'];
  if (authHeader !== ('Bearer ' + process.env.CRON_SECRET)) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  var dayIdx = getDayIndex();
  var i = (dayIdx * 2) % allProblems.length;
  var j = (i + 1) % allProblems.length;
  var p1 = allProblems[i];
  var p2 = allProblems[j];
  var dayNum = dayIdx + 1;
  var html = buildEmail(p1, p2, dayNum);

  fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer " + process.env.RESEND_API_KEY,
    },
    body: JSON.stringify({
      from: SENDER_EMAIL,
      to: RECIPIENT_EMAIL,
      subject: "Day " + dayNum + ": " + p1.name + " + " + p2.name + " \uD83E\uDDE9",
      html: html,
    }),
  })
  .then(function(response) { return response.json(); })
  .then(function(data) {
    return res.status(200).json({ success: true, day: dayNum, problems: [p1.name, p2.name] });
  })
  .catch(function(err) {
    return res.status(500).json({ error: err.message });
  });
};
