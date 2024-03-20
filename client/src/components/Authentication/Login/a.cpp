#include <bits/stdc++.h>
using namespace std;

vector<int> sum(int n, vector<int> &arr, int target)
{

    unordered_map<int, int> mp;
    for (int i = 0; i < n; i++)
        mp.insert({arr[i], i});
    for (int i = 0; i < n; i++)
    {
        int num = arr[i];
        int mor = target - num;
        if (mp.count(mor) > 0 and i != mp[mor])
        {
            return {mp[mor], i};
        }
    }
    return {-1, -1};
}

int main()
{
    int n;
    cin >> n;
    vector<int> arr(n);
    for (int i = 0; i < n; i++)
    {

        cin >> arr[i];
    }
    int target;
    cin >> target;

    vector<int> ans = sum(n, arr, target);
    sort(ans.begin(), ans.end());
    cout << "[" << ans[0] << "," << ans[1] << "]" << endl;

    return 0;
}